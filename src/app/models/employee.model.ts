export interface Employee {
    emp_id: number;
    user_id: number;
    designation: string;
    joining_date: string;
    department_id: number;
    supervisor_id: number | null;
    document_url: string | null;
}
