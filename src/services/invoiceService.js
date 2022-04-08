const KEYS={
    employees:'employees',
    employeeId:'employeeId'
}

export function insertBill(data) {
    let employees=getAllBill();
    data['id'] = generateBillId()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}
export function generateBillId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export function getAllBill() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}