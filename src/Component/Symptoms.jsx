import React from 'react';

const Symptoms = ({ symptoms, symptomInput, setSymptomInput, handleLogSymptom }) => {
  return (
    <div className="mt-20 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Log Symptoms</h2>
      <input 
        type="text" placeholder="Symptom Type" className="border p-2 rounded mb-2 w-full" 
        value={symptomInput.type} 
        onChange={e => setSymptomInput({...symptomInput, type: e.target.value})} 
      />
      <input 
        type="text" placeholder="Severity (mild/moderate/severe)" className="border p-2 rounded mb-2 w-full" 
        value={symptomInput.severity} 
        onChange={e => setSymptomInput({...symptomInput, severity: e.target.value})} 
      />
      <input 
        type="text" placeholder="Notes" className="border p-2 rounded mb-2 w-full" 
        value={symptomInput.notes} 
        onChange={e => setSymptomInput({...symptomInput, notes: e.target.value})} 
      />
      <button onClick={handleLogSymptom} className="bg-purple-600 text-white px-4 py-2 rounded">Add Symptom</button>
      <div className="mt-4">
        {symptoms.map((s, idx) => (
          <div key={idx} className="border p-2 rounded mb-2">
            <p><strong>{s.type}</strong> ({s.severity}) - {s.date}</p>
            <p>{s.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Symptoms;
