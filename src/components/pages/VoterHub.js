import React, { useState } from 'react';
import './css/VoterHub.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function VoterHub() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Updated event data to include time
  const events = {
    '2024-11-12': [{ title: 'Local City Council Meeting', time: '6:00 PM' }],
    '2024-11-05': [{ title: 'Presidential Election Day', time: '7:00 AM - 8:00 PM' }],
    '2024-12-01': [{ title: 'Voter Registration Deadline for Primaries', time: 'All Day' }],
    '2025-01-15': [{ title: 'Community Meeting: Ward 5', time: '4:00 PM' }],
    '2025-03-04': [{ title: 'Primary Election Day', time: 'All Day' }],
  };

  // Function to format selected date to match event keys
  const formattedDate = selectedDate.toISOString().split('T')[0];
  const dailyEvents = events[formattedDate] || [];

  // Function to add special styling to event dates
  const isEventDate = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    return events.hasOwnProperty(dateStr);
  };

  return (
    <div className="container">
        <div className='card mt-4 '>
            <div className='card-body'>
                
            <div className="voter-hub">
              <h1>Voter Hub</h1>
              <p className="intro">
                Your one-stop center to stay informed and get involved. See key dates and resources for civic participation.
              </p>

              {/* Calendar Section */}
              <section className="calendar-section">
                <h2>Important Dates</h2>
                <Calendar 
                  onChange={setSelectedDate} 
                  value={selectedDate} 
                  tileClassName={({ date, view }) => 
                    view === 'month' && isEventDate(date) ? 'event-date' : null
                  }
                  tileContent={({ date, view }) => {
                    const dateStr = date.toISOString().split('T')[0];
                    return view === 'month' && events[dateStr] ? (
                      <div className="event-indicator">●</div>
                    ) : null;
                  }}
                />
                <div className="event-details">
                  {dailyEvents.length > 0 ? (
                    <ul>
                      {dailyEvents.map((event, index) => (
                        <li key={index}>{event.title} at {event.time}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No events on this date.</p>
                  )}
                </div>
              </section>
            </div>
      {/* Registration Tools and Resources Section */}
      <section className="registration-tools">
      <div className="voter-resources">
      <h1>Massachusetts Voter Resources</h1>
      <div className="resource-columns">
        {/* Registration Requirements */}
        <div className="resource-column">
          <h2>Registration Requirements</h2>
          <ul>
            <li>Be a U.S. citizen and a Massachusetts resident.</li>
            <li>Be at least 18 years old by the next election.</li>
            <li>Not currently serving a sentence for a felony conviction.</li>
            <li>Register online, by mail, or in-person by 10 days before Election Day.</li>
          </ul>
        </div>

        {/* Voting Methods */}
        <div className="resource-column">
          <h2>Voting Methods</h2>
          <ul>
            <li><strong>Early Voting:</strong> Available 10 days before general elections. Locations vary by city.</li>
            <li><strong>Mail-In Voting:</strong> Available to all voters. Must request a mail-in ballot 7 days before Election Day.</li>
            <li><strong>In-Person Voting:</strong> Polls open from 7 a.m. to 8 p.m. on Election Day.</li>
            <li><strong>Absentee Voting:</strong> For those unable to vote in person on Election Day due to disability, religious beliefs, or absence from town.</li>
          </ul>
        </div>

        {/* Important Deadlines */}
        <div className="resource-column">
          <h2>Important Deadlines</h2>
          <ul>
            <li><strong>Registration Deadline:</strong> 10 days before Election Day.</li>
            <li><strong>Mail Ballot Request Deadline:</strong> 5 business days before Election Day.</li>
            <li><strong>Early Voting Period:</strong> Starts 10 days before a general election and 5 days before a primary.</li>
            <li><strong>Mail Ballot Return Deadline:</strong> Must be received by close of polls on Election Day.</li>
          </ul>
        </div>

        {/* Voter Rights */}
        <div className="resource-column">
          <h2>Voter Rights</h2>
          <ul>
            <li>Right to a provisional ballot if there’s an issue with registration status.</li>
            <li>Right to assistance when voting, including language support if needed.</li>
            <li>Right to vote if you are in line when polls close.</li>
            <li>Right to file a complaint if you encounter issues when voting.</li>
          </ul>
        </div>
      </div>
    </div>
      </section>
    </div>

            </div>
        </div>
        
    
  );
}

export default VoterHub;