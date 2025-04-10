import { render, screen } from '@testing-library/react';
import Home from '../page'; // นำเข้าไฟล์ Home (index.tsx)
import '@testing-library/jest-dom';

describe('Home page', () => {
  it('should render the heading', () => {
    render(<Home />);

    // ค้นหาหัวข้อที่มีข้อความ "Hello world" และตรวจสอบว่าแสดงผลหรือไม่
    const heading = screen.getByText('Hello world');
    expect(heading).toBeInTheDocument(); // ตรวจสอบว่า heading มีอยู่ใน DOM
  });

  it('should render the Button component', () => {
    render(<Home />);

    // ค้นหาปุ่มที่มีข้อความ "Click me" และตรวจสอบว่าแสดงผลหรือไม่
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument(); // ตรวจสอบว่า Button แสดงอยู่ใน DOM
    expect(button).toHaveClass('bg-slate-500'); // ตรวจสอบว่า Button มีคลาส 'bg-slate-500'
  });
});
