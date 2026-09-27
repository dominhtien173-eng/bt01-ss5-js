// Dữ liệu thô từ máy quét Kiosk
const rawAppointmentCode = "  med-nhi-1024  ";
const cleanPatientName = "  nguyễn văn an  ";

// Dọn dẹp khoảng trắng
const cleanAppointmentCode = rawAppointmentCode.trim();

// Chuẩn hóa mã phiếu sang chữ hoa
const normalizedCode = cleanAppointmentCode.toUpperCase();

// Kiểm tra tiền tố sau khi đã chuẩn hóa
const isValidPrefix = normalizedCode.startsWith("MED-");

// Lấy mã chuyên khoa
const departmentCode = normalizedCode.slice(4, 7);

// Lấy số thứ tự tiếp đón
const appointmentNumber = normalizedCode.slice(8, 12);

// Định dạng tên bệnh nhân
const formattedPatientName = cleanPatientName.trim().toUpperCase();

// Kiểm tra mã hợp lệ
const isCodeValid = normalizedCode.startsWith("MED-");

console.log("Bệnh nhân:", formattedPatientName);
console.log("Chuyên khoa:", departmentCode);
console.log("Số thứ tự tiếp đón:", appointmentNumber);
console.log("Trạng thái hợp lệ:", isCodeValid);