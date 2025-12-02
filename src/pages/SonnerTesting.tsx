import { ErrorSonner } from '@/components/CommonComponents/sonners/ErrorSonner';
import { EmailSonner } from '@/components/CommonComponents/sonners/EmailSonner';
import { DeleteSonner } from '@/components/CommonComponents/sonners/DeleteSonner';
import { SuccessSonner } from '@/components/CommonComponents/sonners/SuccessSonner';
function PaymentPage() {
  const handlePaymentError = () => {
    ErrorSonner();
  };

  const handleWarning = () => {
    EmailSonner();
  };

  const handleDelete = () => {
    DeleteSonner();
  };

  const handleSuccess = () => {
    SuccessSonner();
  };

  return (
    <div className="flex flex-row gap-4 p-7">
      <button
        onClick={handlePaymentError}
        className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-white"
      >
        Error Toast
      </button>

      <button
        className="cursor-pointer rounded-lg bg-yellow-700 px-4 py-2 text-white"
        onClick={handleWarning}
      >
        Email Warning Toast
      </button>

      <button
        className="cursor-pointer rounded-lg bg-[#C1C0C1] px-4 py-2 text-white"
        onClick={handleDelete}
      >
        Delete Toast
      </button>

      <button
        className="cursor-pointer rounded-lg bg-[#306570] px-4 py-2 text-white"
        onClick={handleSuccess}
      >
        Success Toast
      </button>
    </div>
  );
}

export default PaymentPage;
