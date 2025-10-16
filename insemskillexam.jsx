import React, { Component } from 'react'

export default class insemskillexam extends Component {
  render() {

const SortableTable = () => {
  const employees = [
    { name: "Alice", department: "HR", salary: 50000 },
    { name: "Bob", department: "Engineering", salary: 75000 },
    { name: "Charlie", department: "Finance", salary: 60000 },
    { name: "David", department: "Engineering", salary: 72000 },
    { name: "Eve", department: "Marketing", salary: 55000 },
  ];

  const [data, setData] = useState(employees);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

    
    return (
      <div className="p-4">
      <table className="border-collapse w-full text-left">
        <thead>
          <tr>
            {["name", "department", "salary"].map((col) => (
              <th
                key={col}
                onClick={() => handleSort(col)}
                className="border p-2 cursor-pointer bg-gray-100 hover:bg-gray-200"
              >
                {col.charAt(0).toUpperCase() + col.slice(1)}{" "}
                {sortConfig.key === col &&
                  (sortConfig.direction === "asc" ? "▲" : "▼")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((emp, index) => (
            <tr
              key={index}
              className={`border ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-blue-50`}
            >
              <td className="p-2 border">{emp.name}</td>
              <td className="p-2 border">{emp.department}</td>
              <td className="p-2 border">{emp.salary}</td>
            </tr>


    )
  }
}
</tbody>
      </table>
    </div>
  );
};


