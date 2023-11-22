export { default as HomePage } from "./home";
export { default as LoginPage } from "./login";
export { default as RegisterPage } from "./register";
export { default as ForgetPasswordPage } from "./login/forget-password";
export { default as RecoveryOTPage } from "./login/recovery-otp";
export { default as StudentProfilePage } from "./students/profile";
export { default as StudentRevisePage } from "./students/revise";
export { default as TARegisterPage } from "./students/ta-register";
export { default as TARegisterModifyPage } from "./students/ta-register/modify";
export { default as StudentClassPage } from "./students/class";
export { default as LecureRatingPage } from "./lecture/[id]/rating";
export { default as StudentGroupPage } from "./students/group";
export { default } from "./private-class/register";
export { default as SchedulePage } from "./schedule";
export { default as PaymentHistoryPage } from "./payment/history";
export { default as LectureRatingPage } from "./lecture/[id]/rating";
export { default as TAProfilePage } from "./profile/ta-profile";
export { default as TAGroupPage } from "./private-class/ta";
export { default as Error404Page } from "./error/components/error404";
export { default as ProgressGroupRegisterPaymentPage } from "./private-class/register/payment";
export { default as RegisterPrivateGroupPage } from "@/pages/private-class/register";
export { default as RegisterAssembledClassPage } from "@/pages/assembled-class/register";
export { default as RegiserTAAssembledClassPage } from "@/pages/assembled-class/[class-id]/register/ta";
export { default as ModifyPrivateClassPage } from "@/pages/private-class/modify/student";
export { default as ModifyTAPrivateClass } from "@/pages/private-class/modify/ta";
export { default as RegisterTAPrivateClassPage } from "@/pages/private-class/[class-id]/register/ta";
export { default as ListTAAssembledClassPage } from "@/pages/assembled-class/ta";
export { default as RegisterTAClassPage } from "@/pages/class/[class-id]/register/ta";
export { default as ListCoursesPage } from "@/pages/course";
export { default as RegisterTACoursePage } from "@/pages/course/[course-id]/register/ta";
export { default as ListPendingCoursePage } from "@/pages/course/pending/[page]";
export { default as ListApprovedCoursePage } from "@/pages/course/approved/[page]";
export { default as ListTAHistoryPage } from "@/pages/history/ta";
export { default as CreateUniversityPage } from "@/pages/university/create";
export { default as ListUniversityPage } from "@/pages/university";
export { default as ViewUniversityPage } from "@/pages/university/[institution-id]";
export { default as CreateMajorPage } from "@/pages/major/create";

export {
  StudentClassRegister as StudentClassRegisterPage,
  TAClassRegister as TAClassRegisterPage,
} from "./class/[class-id]/register";
