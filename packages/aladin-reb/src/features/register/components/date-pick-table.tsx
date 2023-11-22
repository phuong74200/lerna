import { Checkbox, Table, Text } from "@mantine/core";

export default function DatePickTable() {
  return (
    <Table my="xl" withColumnBorders className="w-full table-fixed rounded-md">
      <thead>
        <tr>
          <Text component="th" className="bg-gray-200 w-[120px] whitespace-nowrap p-3 text-center">
            Thời gian
          </Text>
          <Text component="th" className="bg-gray-200 p-3 text-center">
            2
          </Text>
          <Text component="th" className="bg-gray-200 p-3 text-center">
            3
          </Text>
          <Text component="th" className="bg-gray-200 p-3 text-center">
            4
          </Text>
          <Text component="th" className="bg-gray-200 p-3 text-center">
            5
          </Text>
          <Text component="th" className="bg-gray-200 p-3 text-center">
            6
          </Text>
          <Text component="th" className="bg-gray-200 p-3 text-center">
            7
          </Text>
          <Text component="th" className="bg-gray-200 p-3 text-center">
            CN
          </Text>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="max-w-[100%] whitespace-nowrap">8h-11h</td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
        </tr>
        <tr>
          <td className="max-w-[100%] whitespace-nowrap">11h-14h</td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
        </tr>
        <tr>
          <td className="max-w-[100%] whitespace-nowrap">14h-17h</td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
        </tr>
        <tr>
          <td className="max-w-[100%] whitespace-nowrap">19h-20h</td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
          <td>
            <Checkbox className="mx-auto w-fit" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
