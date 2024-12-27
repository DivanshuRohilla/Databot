import "./Summary.css";
const dataPara = `Supplier references refer to information
 provided by a supplier that can be used to verify their capabilities and experience. 
This information is typically used during the procurement 
process to evaluate potential vendors. Here are some samples of supplier references 
Basic Reference:
Supplier Name: Acme Corporation
Contact Name: John Smith, Sales Manager
Phone Number: (555) 555-5555
Email Address: [email address removed]
Relationship: Supplied office furniture for our headquarters in 2023.
Detailed Reference:
Supplier Name: Global Tech Solutions
Contact Name: Jane Doe, Account Manager
Phone Number: (555) 555-1234
Email Address:`;
function Summary() {
  return (
    <div className="bg-[#e7e7e7] p-4 rounded-lg mt-4 h-64 md:h-80 lg:h-[250px] xl:h-[350px] overflow-scroll scroll-hide overflow-x-hidden">
      <h2 className="font-semibold text-2xl mb-2">Summary</h2>
      <p className="text-sm text-[12px]">{dataPara}</p>
    </div>
  );
}

export default Summary;
