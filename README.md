# HR Attendance Management System

A comprehensive web-based HR management system for tracking employee attendance, managing leaves, and generating reports.

## 🚀 Features

### Core Functionality
- **Employee Attendance Tracking** - Real-time check-in/check-out system
- **Leave Management** - Apply, approve, and track employee leaves
- **Dashboard Analytics** - Visual summaries and department-wise statistics
- **Report Generation** - Export attendance data to CSV format
- **User Authentication** - Secure login and registration system

### Key Highlights
- ✅ Real-time attendance marking with timestamps
- ✅ Dynamic leave approval/rejection workflow
- ✅ Interactive dashboard with live data updates
- ✅ Employee search and filtering capabilities
- ✅ Department-wise attendance statistics
- ✅ Responsive design for all devices
- ✅ Professional notification system

## 📁 Project Structure

```
HR-Attendance-System/
├── akashDashboard.html    # Main dashboard
├── login.html             # User login page
├── signup.html            # User registration
├── README.md              # Project documentation
└── assets/                # (Future: CSS/JS files)
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5.3.2
- **Icons**: Bootstrap Icons 1.11.0
- **Storage**: LocalStorage (for demo purposes)
- **Responsive**: Mobile-first design

## 📊 Dashboard Components

### 1. Summary Cards
- Total Employees
- Present Today
- Absent Count
- On Leave
- Late Check-ins
- Work From Home

### 2. Attendance Management
- Today's attendance list
- Employee search functionality
- Status indicators (Present/Absent/Late/WFH/Leave)
- Check-in/Check-out times

### 3. Leave Management
- Leave requests overview
- Approval/Rejection workflow
- Leave type categorization
- Duration tracking

### 4. Analytics
- Department-wise statistics
- Late arrivals tracking
- Early checkout monitoring
- Monthly attendance summary

### 5. HR Controls
- Mark attendance
- Approve/Reject leaves
- Edit attendance records
- Export reports to CSV

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required (runs locally)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hr-attendance-system.git
   cd hr-attendance-system
   ```

2. **Open in browser**
   ```bash
   # Simply open any HTML file in your browser
   open akashDashboard.html
   # or
   start akashDashboard.html
   ```

### Quick Start

1. **Registration**: Open `signup.html` to create a new account
2. **Login**: Use `login.html` to access the system
3. **Dashboard**: Navigate to `akashDashboard.html` for main functionality

## 💻 Usage

### For Employees
- **Sign Up**: Create account with department details
- **Login**: Access personal dashboard
- **Mark Attendance**: Use "Mark Attendance" button
- **View Status**: Check attendance history

### For HR/Admin
- **Dashboard Overview**: Monitor all employee attendance
- **Approve Leaves**: Process leave requests
- **Generate Reports**: Export attendance data
- **Search Employees**: Find specific employee records
- **Department Analytics**: View department-wise statistics

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Interactive Elements**: Hover effects and smooth transitions
- **Color-coded Status**: Visual indicators for different attendance states
- **Toast Notifications**: Real-time feedback for user actions

## 📱 Responsive Design

- **Desktop**: Full dashboard with all features
- **Tablet**: Optimized layout with collapsible sidebar
- **Mobile**: Touch-friendly interface with stacked components

## 🔧 Customization

### Adding New Features
1. **New Status Types**: Modify `statusIcon` object in JavaScript
2. **Additional Departments**: Update department dropdown options
3. **Custom Reports**: Extend `exportToCSV()` function
4. **New Notifications**: Use `showNotification()` function

### Styling
- **Colors**: Modify CSS custom properties
- **Layout**: Adjust Bootstrap grid classes
- **Icons**: Replace Bootstrap Icons with custom ones

## 📈 Future Enhancements

- [ ] Backend integration (Node.js/PHP)
- [ ] Database connectivity (MySQL/MongoDB)
- [ ] Advanced reporting with charts
- [ ] Email notifications
- [ ] Mobile app development
- [ ] Biometric integration
- [ ] Payroll integration
- [ ] Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Akash**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Bootstrap team for the excellent framework
- Bootstrap Icons for comprehensive icon set
- Community contributors and testers

## 📞 Support

For support, email your.email@example.com or create an issue on GitHub.

---

⭐ **Star this repository if you found it helpful!**