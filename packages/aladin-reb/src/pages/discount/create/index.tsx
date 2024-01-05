import { Group, MultiSelect, NumberInput, Select, Stack, Text, Textarea } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import dayjs from "dayjs";

import { components } from "@/api/v1";
import z from "@/configs/zod";
import useCreateDiscount from "@/features/discount/services/use-create-discount";
import useGetAllInstitution from "@/features/university/services/use-get-all-institution";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

type FormType = components["schemas"]["CreateDiscountRequest"];

const schema: z.ZodType<FormType> = z.object({
  forClassTypes: z.array(z.string()),
  forInstitutions: z.array(z.string()),
  validFrom: z.coerce.date(),
  validThru: z.coerce.date(),
  value: z.number(),
  valueType: z.enum(["EXACT_MONEY", "PERCENTAGE"]),
  content: z.string(),
});

export default function CreateDiscountPage() {
  const mutation = useCreateDiscount();
  const institution = useGetAllInstitution();

  const form = useForm<FormType>({
    initialValues: {
      forClassTypes: [],
      forInstitutions: [],
      validFrom: new Date(),
      validThru: new Date(),
      value: 0,
      valueType: "EXACT_MONEY",
      content: "",
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = () => {
    mutation.mutate(form.values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <Group noWrap className="items-start">
          <DateTimePicker
            placeholder=""
            withAsterisk
            label="Thời gian mở"
            className="w-full"
            {...form.getInputProps("validFrom")}
          />
          <DateTimePicker
            placeholder=""
            withAsterisk
            label="Thời gian hết hạn"
            className="w-full"
            minDate={dayjs(form.values.validFrom).toDate()}
            {...form.getInputProps("validThru")}
          />
          <Group noWrap className="w-full items-end" spacing={2}>
            <NumberInput
              label="Giá trị"
              classNames={{
                input: "rounded-r-none",
              }}
              hideControls
              {...form.getInputProps("value")}
            />
            <Select
              placeholder="Pick one"
              classNames={{
                input: "rounded-l-none",
              }}
              className="w-1/3"
              data={[
                { value: "EXACT_MONEY", label: "VND" },
                { value: "PERCENTAGE", label: "%" },
              ]}
              {...form.getInputProps("valueType")}
            />
          </Group>
        </Group>

        <Textarea
          label="Nội dung"
          placeholder="Địa chỉ, số điện thoại, email, website,..."
          autosize
          minRows={4}
          maxRows={8}
          {...form.getInputProps("content")}
        />

        <Stack spacing={0}>
          <Text className="mb-2 ml-2 font-bold" size="sm">
            Điều kiện
          </Text>
          <Stack>
            <MultiSelect placeholder="Trường" data={institution.data?.list.toSelectList() || []} />
            <MultiSelect placeholder="Môn" data={institution.data?.list.toSelectList() || []} />
          </Stack>
        </Stack>

        <Group position="right">
          <RippleButton type="submit" loading={mutation.isLoading} fullWidth>
            Tạo
          </RippleButton>
        </Group>
      </Stack>
    </form>
  );
}
