import { useState } from 'react';
import EmailTemplate from '@/components/EmailTemplate';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [copying, setCopying] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleCopyHtml = async () => {
    try {
      setCopying(true);
      const res = await fetch('/email-template.html', { cache: 'no-store' });
      const text = await res.text();
      await navigator.clipboard.writeText(text);
    } finally {
      setCopying(false);
    }
  };

  const handleDownloadHtml = async () => {
    try {
      setDownloading(true);
      const res = await fetch('/email-template.html', { cache: 'no-store' });
      const text = await res.text();
      const blob = new Blob([text], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'capital-solutions-email-template.html';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-email-text mb-2">Unlock Flash Bonuses & Deal Alerts</h1>
          <p className="text-email-text-light">Get exclusive commission opportunities—via SMS only.</p>
        </div>

        <EmailTemplate />

        <div className="mt-8 text-center">
          <p className="text-sm text-email-text-light mb-3">Export your inline-styled HTML for Brevo and Constant Contact.</p>
          <div className="flex justify-center gap-3">
            <Button variant="secondary" onClick={handleCopyHtml} disabled={copying}>
              {copying ? 'Copying…' : 'Copy HTML'}
            </Button>
            <Button onClick={handleDownloadHtml} disabled={downloading}>
              {downloading ? 'Preparing…' : 'Download HTML'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
