import useGetStudentById from "@/features/students/services/use-get-student-by-id";

export default function useStudent(user_id: string) {
  const students = useGetStudentById(user_id);

  return students;
}
