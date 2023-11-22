import { List, Text } from "@mantine/core";

export default function RegisterGuide() {
  return (
    <List pr="lg" mt="md">
      <List.Item>
        <Text component="span" weight="bold">
          Bước 1:
        </Text>{" "}
        Trợ giảng tự chuẩn bị tài liệu dạy học trước khi đăng ký.
      </List.Item>
      <List.Item>
        <Text component="span" weight="bold">
          Bước 2:
        </Text>{" "}
        Nộp tài liệu và hoàn thành thông tin tại form đăng ký này.
      </List.Item>
      <List.Item>
        <Text component="span" weight="bold">
          Bước 3:
        </Text>{" "}
        Chờ xét duyệt tài liệu (tối đa 5 ngày).
      </List.Item>
      <List.Item>
        <Text component="span" weight="bold">
          Bước 4:
        </Text>{" "}
        Nhận email xác nhận trở thành trợ giảng chính thức sau khi xét duyệt tài liệu thành công.
      </List.Item>
      <List.Item>
        <Text component="span" weight="bold">
          Bước 5:
        </Text>{" "}
        Gửi yêu cầu tham gia vào group trợ giảng Aladin Official theo đường link dưới đây và bắt đầu
        nhận các nhóm trợ giảng.
      </List.Item>
      <List.Item>
        <Text component="span" weight="bold">
          Bước 6:
        </Text>{" "}
        Trợ giảng tự chuẩn bị tài liệu dạy học trước khi đăng ký.
      </List.Item>
      <List.Item>
        <Text component="span" weight="bold">
          Lưu ý:
        </Text>{" "}
        Trong thời gian bước 3, nếu có bất kỳ vấn đề nào Aladin sẽ liên hệ trợ giảng để yêu cầu
        chỉnh sửa hoặc có thể yêu cầu một buổi phỏng vấn để biết thêm thông tin.
      </List.Item>
    </List>
  );
}
