import React, { useState } from 'react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    dob: '',
    reason: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      handleNext();
    } else {
      alert('Appointment confirmed!');
      onClose();
      setStep(1); // Reset
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 p-6 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Schedule Appointment</h2>
            <p className="text-gray-500 text-sm">Book your consultation in 3 easy steps</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 -z-10 rounded-full">
              <div 
                className="h-full bg-[#10b981] rounded-full transition-all duration-300" 
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
            </div>
            
            {[
              { num: 1, label: 'Personal Info' },
              { num: 2, label: 'Select Time' },
              { num: 3, label: 'Confirm' }
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-2 bg-white px-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                  step >= s.num ? 'bg-[#10b981] text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {s.num}
                </div>
                <span className={`hidden sm:block text-sm font-medium ${
                  step >= s.num ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <h3 className="text-lg font-bold text-gray-900">Patient Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#10b981] focus:border-transparent outline-none transition-all"
                      value={formData.fullName}
                      onChange={e => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#10b981] focus:border-transparent outline-none transition-all"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#10b981] focus:border-transparent outline-none transition-all"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#10b981] focus:border-transparent outline-none transition-all"
                      value={formData.dob}
                      onChange={e => setFormData({...formData, dob: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit *</label>
                    <select 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#10b981] focus:border-transparent outline-none transition-all bg-white"
                      value={formData.reason}
                      onChange={e => setFormData({...formData, reason: e.target.value})}
                    >
                      <option value="">Select a reason</option>
                      <option value="General Checkup">General Checkup</option>
                      <option value="Fever/Cold">Fever, Cold, or Flu</option>
                      <option value="Pediatric">Pediatric Care</option>
                      <option value="Elderly">Elderly Care</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                    <textarea 
                      rows={3}
                      placeholder="Any symptoms or concerns you'd like to mention..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#10b981] focus:border-transparent outline-none transition-all resize-none"
                      value={formData.notes}
                      onChange={e => setFormData({...formData, notes: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <h3 className="text-lg font-bold text-gray-900">Select Date & Time</h3>
                <div className="bg-gray-50 rounded-xl p-8 text-center border-2 border-dashed border-gray-200">
                  <span className="material-symbols-outlined text-4xl text-gray-400 mb-2">calendar_month</span>
                  <p className="text-gray-500">Please select a preferred date for your appointment.</p>
                  <input type="date" required className="mt-4 px-4 py-2 rounded-lg border border-gray-300" />
                  
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '06:00 PM'].map(time => (
                      <label key={time} className="cursor-pointer">
                        <input type="radio" name="time" className="peer sr-only" required />
                        <div className="p-3 rounded-lg border border-gray-200 text-sm font-medium peer-checked:bg-[#10b981] peer-checked:text-white peer-checked:border-[#10b981] hover:bg-gray-100 transition-all">
                          {time}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <div className="bg-[#10b981]/10 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <span className="material-symbols-outlined text-3xl">check</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Almost Done!</h3>
                  <p className="text-gray-600">Review your details and confirm the appointment.</p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 space-y-3 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Patient Name</span>
                    <span className="font-medium">{formData.fullName || '-'}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Contact</span>
                    <span className="font-medium">{formData.phone || '-'}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Reason</span>
                    <span className="font-medium">{formData.reason || '-'}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              {step > 1 ? (
                <button 
                  type="button" 
                  onClick={handleBack}
                  className="px-6 py-3 font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Back
                </button>
              ) : (
                <div /> // Spacer
              )}
              
              <button 
                type="submit"
                className="px-8 py-3 bg-[#10b981] hover:bg-[#059669] text-white font-bold rounded-xl shadow-lg shadow-[#10b981]/30 transition-all flex items-center gap-2"
              >
                {step === 3 ? 'Confirm Booking' : 'Continue'}
                {step < 3 && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
