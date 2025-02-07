import React, { useState, useEffect } from "react";
import axios from "axios";

const Apidata = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setEmployees(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.phone.includes(searchTerm) ||
      employee.company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading)
    return (
      <div className="text-center text-blue-600 font-semibold text-lg">
        Loading employees...
      </div>
    );
  if (error)
    return <div className="text-red-500 text-center">Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-bold text-center text-primary mb-6">
        Employee List
      </h1>

      {/* Search Input */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search employees..."
          className="border p-2 rounded-md w-full sm:w-96 md:w-80 lg:w-96"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Employee Table - Responsive */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left text-xs sm:text-sm">ID</th>
              <th className="py-3 px-4 text-left text-xs sm:text-sm">Name</th>
              <th className="py-3 px-4 text-left text-xs sm:text-sm">Email</th>
              <th className="py-3 px-4 text-left text-xs sm:text-sm">Phone</th>
              <th className="py-3 px-4 text-left text-xs sm:text-sm">Company</th>
            </tr>
          </thead>
          <tbody>
            {paginatedEmployees.length > 0 ? (
              paginatedEmployees.map((employee, index) => (
                <tr
                  key={employee.id}
                  className={
                    index % 2 === 0 ? "bg-blue-100" : "bg-blue-50"
                  }
                >
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">
                    {employee.id}
                  </td>
                  <td className="py-2 px-4 border-b font-semibold text-xs sm:text-sm">
                    {employee.name}
                  </td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">
                    {employee.email}
                  </td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">
                    {employee.phone}
                  </td>
                  <td className="py-2 px-4 border-b text-xs sm:text-sm">
                    {employee.company.name}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-600">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-4 py-2 font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Apidata;
