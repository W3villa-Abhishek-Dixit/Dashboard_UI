import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaSearch, FaPlus } from "react-icons/fa";

const EmployeeTable = () => {
  const initialEmployees = [
    { id: 1, name: "John Doe", designation: "Software Engineer", address: "New York, USA", phone: "9876543210", code: "EMP001" },
    { id: 2, name: "Jane Smith", designation: "UI/UX Designer", address: "Los Angeles, USA", phone: "8765432109", code: "EMP002" },
  ];

  // Load employees from localStorage or use the initial data
  const loadEmployees = () => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    return storedEmployees || initialEmployees;
  };

  const [employees, setEmployees] = useState(loadEmployees());
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [formData, setFormData] = useState({ name: "", designation: "", address: "", phone: "", code: "" });

  const itemsPerPage = 5;

  // Update localStorage whenever employees state changes
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Handle Add & Edit Employee
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingEmployee) {
      setEmployees(
        employees.map((emp) =>
          emp.id === editingEmployee.id ? { ...editingEmployee, ...formData } : emp
        )
      );
      setEditingEmployee(null);
    } else {
      setEmployees([...employees, { id: Date.now(), ...formData }]);
    }
    setFormData({ name: "", designation: "", address: "", phone: "", code: "" });
  };

  // Handle Delete
  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  // Handle Edit
  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setFormData(employee);
  };

  // Handle Search
  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.phone.includes(searchTerm) ||
      emp.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic - Only Show If More Than 5 Entries
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Employee Management System</h2>

      {/* Search Bar */}
      <div className="flex items-center mb-4 border rounded-md px-2 py-1 w-96">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search Employee..."
          className="w-full p-1 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Employee Table */}
<div className="overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm md:text-base">
    <thead>
      <tr className="bg-gray-200 text-[10px] sm:text-sm md:text-base">
        <th className="border border-gray-300 p-2">Employee Name</th>
        <th className="border border-gray-300 p-2">Designation</th>
        <th className="border border-gray-300 p-2">Address</th>
        <th className="border border-gray-300 p-2">Phone No</th>
        <th className="border border-gray-300 p-2">Emp Code</th>
        <th className="border border-gray-300 p-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {paginatedEmployees.length > 0 ? (
        paginatedEmployees.map((emp) => (
          <tr key={emp.id} className="hover:bg-gray-100 text-[10px] sm:text-sm md:text-base">
            <td className="border border-gray-300 p-2">{emp.name}</td>
            <td className="border border-gray-300 p-2">{emp.designation}</td>
            <td className="border border-gray-300 p-2">{emp.address}</td>
            <td className="border border-gray-300 p-2">{emp.phone}</td>
            <td className="border border-gray-300 p-2">{emp.code}</td>
            <td className="border border-gray-300 p-2 flex flex-wrap gap-2 justify-center">
              <button className="bg-blue-500 px-2 sm:px-4 py-1 text-white rounded-md" onClick={() => handleEdit(emp)}>
                Edit
              </button>
              <button className="bg-red-500 px-2 sm:px-4 py-1 text-white rounded-md" onClick={() => handleDelete(emp.id)}>
                <FaTrash />
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="6" className="text-center p-4">No employees found</td>
        </tr>
      )}
    </tbody>
  </table>
</div>

{/* Pagination (Only Show If More Than 5 Entries) */}
{filteredEmployees.length > itemsPerPage && (
  <div className="flex justify-between items-center mt-4 text-xs sm:text-sm">
    <button
      className="px-2 sm:px-3 py-1 bg-blue-500 text-white rounded-md"
      disabled={currentPage === 1}
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    >
      Prev
    </button>
    <span>
      Page {currentPage} of {totalPages}
    </span>
    <button
      className="px-2 sm:px-3 py-1 bg-blue-500 text-white rounded-md"
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    >
      Next
    </button>
  </div>
)}


      {/* Add/Edit Employee Form */}
      <form onSubmit={handleSubmit} className="mt-6 p-4 bg-gray-100 rounded-md">
        <h3 className="text-lg font-semibold mb-3">{editingEmployee ? "Edit Employee" : "Add Employee"}</h3>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="p-2 border rounded-md" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
          <input type="text" placeholder="Designation" className="p-2 border rounded-md" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} required />
          <input type="text" placeholder="Address" className="p-2 border rounded-md" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required />
          <input type="text" placeholder="Phone No" className="p-2 border rounded-md" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
          <input type="text" placeholder="Emp Code" className="p-2 border rounded-md" value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} required />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
          {editingEmployee ? "Update Employee" : "Add Employee"}
        </button>
      </form>
    </div>
  );
};

export default EmployeeTable;
