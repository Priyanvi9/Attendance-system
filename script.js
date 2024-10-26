const attendanceData = {
    Present: 0,
    Absent: 0,
    Late: 0,
};

const attendanceForm = document.getElementById('attendanceForm');
const attendanceChart = document.getElementById('attendanceChart').getContext('2d');

const chart = new Chart(attendanceChart, {
    type: 'bar',
    data: {
        labels: ['Present', 'Absent', 'Late'],
        datasets: [{
            label: 'Attendance Status',
            data: [attendanceData.Present, attendanceData.Absent, attendanceData.Late],
            backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

attendanceForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const status = document.getElementById('status').value;

    if (status) {
        attendanceData[status]++;
        updateChart();
        attendanceForm.reset();
    }
});

function updateChart() {
    chart.data.datasets[0].data = [attendanceData.Present, attendanceData.Absent, attendanceData.Late];
    chart.update();
}