import EmailTemplate from '@/components/EmailTemplate';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-email-text mb-2">Capital Solutions Bancorp Email Template</h1>
          <p className="text-email-text-light">Modern fintech email design for broker SMS opt-ins</p>
        </div>
        
        <EmailTemplate />
        
        <div className="mt-8 text-center text-sm text-email-text-light">
          <p>Email template ready for HTML export and email marketing platforms</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
