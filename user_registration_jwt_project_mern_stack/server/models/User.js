const mongoose = require('mongoose');

// Define user session schema
const userSessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  startTime: {
    type: Date,
    required: true,
    default: Date.now
  },
  endTime: {
    type: Date
  }
});

// Create model for user session
const UserSession = mongoose.model('UserSession', userSessionSchema);

// Define attendance schema
const attendanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['present', 'absent', 'leave'],
    required: true
  },
  remarks: {
    type: String
  }
});

// Create model for attendance
const Attendance = mongoose.model('Attendance', attendanceSchema);

// Define user schema
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'project_manager', "develpment_lead" , 'senior_developer' , "developer", 'fresher' ,  'test_lead' , 'senior_test_engineer', 'test_engineer' , 'fresher'],
    default: 'user'
  },
  profileImage: {
    type: String,
    default: 'default-avatar.jpg'
  },
  address: {
    type: String
  },
  joiningDate: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  // Add fields to track changes
  changeLogs: [{
    field: String,
    oldValue: String,
    newValue: String,
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  }]
});

const User = mongoose.model('User', userSchema);

// Define profile change log schema
const profileChangeLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  field: {
    type: String,
    required: true
  },
  oldValue: {
    type: String,
    required: true
  },
  newValue: {
    type: String,
    required: true
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});


// Method to export profile change logs to Excel
profileChangeLogSchema.statics.exportToExcel = async function (filePath) {
    try {
      // Fetch all profile change logs
      const profileChangeLogs = await this.find({});
  
      // Create a new Excel workbook and worksheet
      const workbook = new exceljs.Workbook();
      const worksheet = workbook.addWorksheet('ProfileChangeLogs');
  
      // Define headers for the Excel sheet
      worksheet.columns = [
        { header: 'User ID', key: 'userId', width: 15 },
        { header: 'Field', key: 'field', width: 20 },
        { header: 'Old Value', key: 'oldValue', width: 30 },
        { header: 'New Value', key: 'newValue', width: 30 },
        { header: 'Updated By', key: 'updatedBy', width: 20 },
        { header: 'Updated At', key: 'updatedAt', width: 25 }
      ];
  
      // Populate the Excel sheet with profile change logs
      profileChangeLogs.forEach((log) => {
        worksheet.addRow({
          userId: log.userId,
          field: log.field,
          oldValue: log.oldValue,
          newValue: log.newValue,
          updatedBy: log.updatedBy,
          updatedAt: log.updatedAt
        });
      });
  
      // Write the workbook to a file
      await workbook.xlsx.writeFile(filePath);
  
      console.log('Profile change logs exported to Excel successfully.');
    } catch (error) {
      console.error('Error exporting profile change logs to Excel:', error);
    }
  };
  
  // Method to export profile change logs to PDF
  profileChangeLogSchema.statics.exportToPDF = async function (filePath) {
    try {
      // Fetch all profile change logs
      const profileChangeLogs = await this.find({});
  
      // Create a new PDF document
      const doc = new pdf();
  
      // Add a title to the PDF document
      doc.fontSize(20).text('Profile Change Logs', { align: 'center', underline: true });
  
      // Add profile change logs to the PDF document
      profileChangeLogs.forEach((log) => {
        doc.fontSize(12).text(`User ID: ${log.userId}`, { continued: true }).text(`Field: ${log.field}`)
          .text(`Old Value: ${log.oldValue}`).text(`New Value: ${log.newValue}`)
          .text(`Updated By: ${log.updatedBy}`).text(`Updated At: ${log.updatedAt}`).text('');
      });
  
      // Save the PDF document to a file
      doc.pipe(fs.createWriteStream(filePath));
      doc.end();
  
      console.log('Profile change logs exported to PDF successfully.');
    } catch (error) {
      console.error('Error exporting profile change logs to PDF:', error);
    }
  };
  
  // Define ProfileChangeLog model
  const ProfileChangeLog = mongoose.model('ProfileChangeLog', profileChangeLogSchema);


module.exports = {
  User,
  UserSession,
  Attendance,
  ProfileChangeLog
};
