document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch all holiday data
    const fetchHolidayData = async () => {
      const apiKey = '3faad2330a844c3d847a09dd59b3ed2f';
      const apiUrl = 'https://holidays.abstractapi.com/v1/';
      const country = 'US';
      const year = 2020;
      const month = 12;
  
      try {
        const response = await fetch(`${apiUrl}?api_key=${apiKey}&country=${country}&year=${year}&month=${month}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return await response.json();
      } catch (error) {
        console.error(error);
        return [];
      }
    };
  
    // Function to display holiday data on the webpage
    const displayHolidayData = (data) => {
      const holidayInfoDiv = document.getElementById('holiday-info');
      let holidayInfoHTML = '';
  
      data.forEach(holiday => {
        const date = new Date(holiday.date);
        const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const holidayName = holiday.name;
  
        holidayInfoHTML += `
          <div class="holiday">
            <p>Date: ${formattedDate}</p>
            <p>Name: ${holidayName}</p>
          </div>
        `;
      });
  
      holidayInfoDiv.innerHTML = holidayInfoHTML;
    };
  
    // Fetch data and display it when the DOM is ready
    fetchHolidayData()
      .then(data => displayHolidayData(data))
      .catch(error => console.error(error));
  });
  