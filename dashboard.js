// Set current date
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-IN');

// Sample Data
let attendanceData = [
  { name: "Rahul Sharma", id: "EMP001", dept: "IT", status: "Present", checkin: "09:15", checkout: "18:30", hours: "9h 15m" },
  { name: "Priya Singh", id: "EMP002", dept: "HR", status: "Present", checkin: "09:00", checkout: "18:00", hours: "9h 00m" },
  { name: "Amit Kumar", id: "EMP003", dept: "Finance", status: "Late", checkin: "10:30", checkout: "-", hours: "-" },
  { name: "Sneha Patel", id: "EMP004", dept: "Marketing", status: "WFH", checkin: "09:00", checkout: "17:30", hours: "8h 30m" },
  { name: "Vikash Gupta", id: "EMP005", dept: "IT", status: "Absent", checkin: "-", checkout: "-", hours: "-" },
  { name: "Anita Rao", id: "EMP006", dept: "HR", status: "Leave", checkin: "-", checkout: "-", hours: "-" }
];

let leaveData = [
  { name: "Anita Rao", type: "Sick", duration: "2 days", status: "Approved", id: 1 },
  { name: "Ravi Mehta", type: "Casual", duration: "1 day", status: "Pending", id: 2 },
  { name: "Sunita Das", type: "Paid", duration: "5 days", status: "Approved", id: 3 },
  { name: "Kiran Joshi", type: "Casual", duration: "1 day", status: "Pending", id: 4 }
];

const absentData = [
  { name: "Vikash Gupta", dept: "IT", lastWorking: "Yesterday", contact: "Not Informed" },
  { name: "Mohan Lal", dept: "Finance", lastWorking: "2 days ago", contact: "Informed" },
  { name: "Rita Sharma", dept: "Marketing", lastWorking: "Today", contact: "Informed" }
];

const departmentData = [
  { name: "IT", total: 15, present: 12, percentage: 80 },
  { name: "HR", total: 8, present: 7, percentage: 87.5 },
  { name: "Finance", total: 10, present: 8, percentage: 80 },
  { name: "Marketing", total: 12, present: 10, percentage: 83.3 }
];

// Populate Attendance Table
function populateAttendanceTable() {
  const tbody = document.getElementById('attendanceTable');
  tbody.innerHTML = '';
  
  attendanceData.forEach(emp => {
    const statusIcon = {
      'Present': '🟢',
      'Absent': '🔴',
      'Leave': '🟡',
      'WFH': '🔵',
      'Late': '🟠'
    };
    
    const row = `
      <tr>
        <td>${emp.name}</td>
        <td>${emp.id}</td>
        <td>${emp.dept}</td>
        <td>${statusIcon[emp.status]} ${emp.status}</td>
        <td>${emp.checkin}</td>
        <td>${emp.checkout}</td>
        <td>${emp.hours}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// Populate Leave Table
function populateLeaveTable() {
  const tbody = document.getElementById('leaveTable');
  tbody.innerHTML = '';
  
  leaveData.forEach(leave => {
    const statusBadge = leave.status === 'Approved' ? 
      '<span class="badge bg-success">Approved</span>' : 
      '<span class="badge bg-warning text-dark">Pending</span>';
    
    const row = `
      <tr data-leave-id="${leave.id}">
        <td>${leave.name}</td>
        <td>${leave.type}</td>
        <td>${leave.duration}</td>
        <td>${statusBadge}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// Populate Absent Table
function populateAbsentTable() {
  const tbody = document.getElementById('absentTable');
  tbody.innerHTML = '';
  
  absentData.forEach(absent => {
    const contactBadge = absent.contact === 'Informed' ? 
      '<span class="badge bg-success">Informed</span>' : 
      '<span class="badge bg-danger">Not Informed</span>';
    
    const row = `
      <tr>
        <td>${absent.name}</td>
        <td>${absent.dept}</td>
        <td>${absent.lastWorking}</td>
        <td>${contactBadge}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// Populate Department Stats
function populateDepartmentStats() {
  const container = document.getElementById('departmentStats');
  container.innerHTML = '';
  
  departmentData.forEach(dept => {
    const item = `
      <div class="mb-3">
        <div class="d-flex justify-content-between mb-1">
          <small class="fw-bold">${dept.name}</small>
          <small class="text-muted">${dept.present}/${dept.total} (${dept.percentage}%)</small>
        </div>
        <div class="progress">
          <div class="progress-bar bg-success" style="width: ${dept.percentage}%"></div>
        </div>
      </div>
    `;
    container.innerHTML += item;
  });
}

// Populate Late Arrivals and Early Checkout
function populateLateAndEarly() {
  const lateList = document.getElementById('lateArrivalsList');
  const earlyList = document.getElementById('earlyCheckoutList');
  
  lateList.innerHTML = `
    <li class="mb-1"><small><i class="bi bi-person"></i> Amit Kumar - 10:30 AM</small></li>
    <li class="mb-1"><small><i class="bi bi-person"></i> Ravi Mehta - 10:15 AM</small></li>
    <li class="mb-1"><small><i class="bi bi-person"></i> Suresh Yadav - 09:45 AM</small></li>
  `;
  
  earlyList.innerHTML = `
    <li class="mb-1"><small><i class="bi bi-person"></i> Neha Gupta - 5:30 PM</small></li>
    <li class="mb-1"><small><i class="bi bi-person"></i> Rajesh Kumar - 5:15 PM</small></li>
  `;
}

// Search functionality
document.getElementById('searchEmployee').addEventListener('input', function(e) {
  const searchTerm = e.target.value.toLowerCase();
  const rows = document.querySelectorAll('#attendanceTable tr');
  
  rows.forEach(row => {
    const name = row.cells[0].textContent.toLowerCase();
    row.style.display = name.includes(searchTerm) ? '' : 'none';
  });
});

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    const filter = this.dataset.filter;
    showNotification(`Filtering data for: ${filter}`, 'info');
    console.log(`Filtering data for: ${filter}`);
  });
});

// HR Control functions with proper event listeners
document.getElementById('approveBtn').addEventListener('click', function() {
  const pendingLeaves = leaveData.filter(leave => leave.status === 'Pending');
  if (pendingLeaves.length > 0) {
    const leave = pendingLeaves[0];
    leave.status = 'Approved';
    populateLeaveTable();
    showNotification(`Leave approved for ${leave.name}`, 'success');
  } else {
    showNotification('No pending leaves to approve', 'warning');
  }
});

document.getElementById('rejectBtn').addEventListener('click', function() {
  const pendingLeaves = leaveData.filter(leave => leave.status === 'Pending');
  if (pendingLeaves.length > 0) {
    const leave = pendingLeaves[0];
    leave.status = 'Rejected';
    populateLeaveTable();
    showNotification(`Leave rejected for ${leave.name}`, 'danger');
  } else {
    showNotification('No pending leaves to reject', 'warning');
  }
});

document.getElementById('editBtn').addEventListener('click', function() {
  showNotification('Edit attendance functionality - Opening modal...', 'info');
});

document.getElementById('exportBtn').addEventListener('click', function() {
  exportToCSV();
  showNotification('Report exported successfully!', 'success');
});

document.getElementById('markAttendanceBtn').addEventListener('click', function() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-IN', { hour12: false, hour: '2-digit', minute: '2-digit' });
  showNotification(`Attendance marked at ${time}`, 'success');
});

// Notification system
function showNotification(message, type = 'info') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
  alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
  alertDiv.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  
  document.body.appendChild(alertDiv);
  
  setTimeout(() => {
    if (alertDiv.parentNode) {
      alertDiv.remove();
    }
  }, 3000);
}

// Export to CSV function
function exportToCSV() {
  const csvContent = "data:text/csv;charset=utf-8," + 
    "Name,ID,Department,Status,Check-in,Check-out,Hours\n" +
    attendanceData.map(emp => 
      `${emp.name},${emp.id},${emp.dept},${emp.status},${emp.checkin},${emp.checkout},${emp.hours}`
    ).join("\n");
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `attendance_report_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Update summary cards dynamically
function updateSummaryCards() {
  const present = attendanceData.filter(emp => emp.status === 'Present').length;
  const absent = attendanceData.filter(emp => emp.status === 'Absent').length;
  const onLeave = attendanceData.filter(emp => emp.status === 'Leave').length;
  const wfh = attendanceData.filter(emp => emp.status === 'WFH').length;
  const late = attendanceData.filter(emp => emp.status === 'Late').length;
  
  document.getElementById('presentToday').textContent = present;
  document.getElementById('absentToday').textContent = absent;
  document.getElementById('onLeave').textContent = onLeave;
  document.getElementById('wfhToday').textContent = wfh;
  document.getElementById('lateCheckins').textContent = late;
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
  populateAttendanceTable();
  populateLeaveTable();
  populateAbsentTable();
  populateDepartmentStats();
  populateLateAndEarly();
  updateSummaryCards();
  
  setTimeout(() => {
    showNotification('Welcome to HR Dashboard! All systems are operational.', 'success');
  }, 1000);
});