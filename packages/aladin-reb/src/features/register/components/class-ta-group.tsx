// import { faker } from "@faker-js/faker";
// import {
//   Button,
//   Checkbox,
//   Group,
//   Image,
//   Modal,
//   Stack,
//   Stepper,
//   Table,
//   Text,
//   Title,
// } from "@mantine/core";
// import dayjs from "dayjs";

// import useModalRouteTrasition from "@/hooks/use-modal-route-transition";
// import useStep from "@/hooks/use-step";
// import { stepperStyles } from "@/pages/class/[class-id]/register/ta.styles";
// import generateFilledArray from "@/utils/generate-filled-array";
// import { generatePlaceHolderImage } from "@/utils/generate-place-holder-image";
// import { getClassHours } from "@/utils/get-class-time";

// const time = generateFilledArray(
//   faker.number.int({ min: 5, max: 5 }),
//   () => [faker.date.future(), faker.date.future()] as [Date, Date],
// );

// export default function ClassRegister() {
//   const step = useStep(0);

//   const { open, goBack } = useModalRouteTrasition();

//   return (
//     <Modal.Root
//       opened={open}
//       onClose={goBack}
//       size="55%"
//       centered
//       transitionProps={{ transition: "slide-up" }}
//     >
//       <Modal.Overlay blur={3} opacity={0.55} />
//       <Modal.Content maw={720}>
//         <Modal.Header>
//           <Stack w="100%" justify="center" align="center" spacing={0}>
//             <Title order={2} transform="uppercase">
//               Đăng ký dạy nhóm ghép
//             </Title>
//             <Text>Fundamentals of Financial Management</Text>
//           </Stack>
//         </Modal.Header>
//         <Modal.Body p="xl">
//           <Stepper
//             styles={stepperStyles}
//             active={step.value}
//             onStepClick={step.goto}
//             breakpoint="sm"
//           >
//             <Stepper.Step label="Bước 1" description="Thông tin chung">
//               <Text align="center">
//                 Chọn buổi để dạy nhóm ghép: Bạn còn{" "}
//                 <Text span weight="bold" color="red">
//                   3 buổi
//                 </Text>{" "}
//                 chưa chọn
//               </Text>
//               <Table my="xl" withColumnBorders className="w-full table-fixed rounded-md">
//                 <thead>
//                   <tr>
//                     <Text
//                       component="th"
//                       className="bg-gray-200 w-[120px] whitespace-nowrap p-3 text-center"
//                     >
//                       Thời gian
//                     </Text>
//                     <Text component="th" className="bg-gray-200 p-3 text-center">
//                       2
//                     </Text>
//                     <Text component="th" className="bg-gray-200 p-3 text-center">
//                       3
//                     </Text>
//                     <Text component="th" className="bg-gray-200 p-3 text-center">
//                       4
//                     </Text>
//                     <Text component="th" className="bg-gray-200 p-3 text-center">
//                       5
//                     </Text>
//                     <Text component="th" className="bg-gray-200 p-3 text-center">
//                       6
//                     </Text>
//                     <Text component="th" className="bg-gray-200 p-3 text-center">
//                       7
//                     </Text>
//                     <Text component="th" className="bg-gray-200 p-3 text-center">
//                       CN
//                     </Text>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {time.map((item) => (
//                     <tr key={item[0].getTime()}>
//                       <td className="max-w-[100%] whitespace-nowrap">{getClassHours(item)}</td>
//                       {generateFilledArray(7, (i, index) => (
//                         <td key={index}>
//                           {dayjs(item[0]).get("day") === index ? (
//                             <Checkbox className="mx-auto w-fit" />
//                           ) : null}
//                         </td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//               <Group position="right">
//                 <Button variant="outline" onClick={goBack}>
//                   Quay lại
//                 </Button>
//                 <Button onClick={step.next}>Đăng ký dạy</Button>
//               </Group>
//             </Stepper.Step>
//             <Stepper.Completed>
//               <Text align="center">Chúc mừng bạn đã đăng ký thành công nhóm ghép.</Text>
//               <Text align="center">
//                 Hãy thường xuyên kiểm tra trạng thái nhóm ghép để đảm bảo quyền lợi của bạn.
//               </Text>
//               <Image
//                 my="lg"
//                 mx="auto"
//                 width={240}
//                 src={generatePlaceHolderImage({ width: 240, height: 240 })}
//               />
//               <Group position="right" mt="lg">
//                 <Button variant="outline" onClick={goBack}>
//                   Quay lại
//                 </Button>
//               </Group>
//             </Stepper.Completed>
//           </Stepper>
//         </Modal.Body>
//       </Modal.Content>
//     </Modal.Root>
//   );
// }
