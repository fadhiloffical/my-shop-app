import './index.css';

type TermsDialogProps = {
  onCancel: () => void;
  onAccept: () => void;
}

const TermsDialog = ({ onCancel, onAccept }: TermsDialogProps) => {
  return (
    <div className="terms-dialog-overlay">
      <div className="terms-dialog">
        <h2>Terms &amp; Conditions</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. 
          </p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. 
          </p>
        <div className="terms-button-wrapper">
          <button onClick={onCancel}>Close</button>
          <button onClick={onAccept}>Accept</button>
        </div>
      </div>
    </div>
  );
}

export default TermsDialog;
