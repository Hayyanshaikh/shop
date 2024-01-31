import React from 'react';
import { useParams,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Invoice = () => {
	const location = useLocation();
	const currentUrl = location.pathname;
	const baseUrl = "http://localhost:5173"
  const { invoice } = useParams();

  const initialInvoiceData = useSelector((state) => state.invoice.invoices);
  const invoiceData = initialInvoiceData.find(
    (inv) => inv.invoiceNumber.toString() === invoice
  );

  if (!invoiceData) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <section>
      <div className="container">
        <div className="max-w-3xl mx-auto p-8 bg-white border rounded">
          {/* Invoice Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Invoice</h1>
            <p className="text-gray-500">{invoiceData.invoiceNumber}</p>
            <p>{baseUrl + currentUrl}</p>
          </div>

          <div className="flex gap-10 items-start">
          	{/* Customer Info */}
	          <div className="flex-1">
	            <h2 className="text-lg font-semibold mb-2">Bill To</h2>
	            <p className="text-gray-800"><span className="font-semibold text-black">Name:</span> {invoiceData.billTo.name}</p>
	            <p className="text-gray-800"><span className="font-semibold text-black">Address:</span> {invoiceData.billTo.address}</p>
	            <p className="text-gray-800"><span className="font-semibold text-black">City:</span> {invoiceData.billTo.city}</p>
	            <p className="text-gray-800"><span className="font-semibold text-black">Country:</span> {invoiceData.billTo.country}</p>
	          </div>

	          {/* Payment Details */}
	          <div className="flex-1">
	            <h2 className="text-lg font-semibold mb-2">Payment Details</h2>
	            <p className="text-gray-800">Payment Method: {invoiceData.paymentMethod}</p>
	            <p className="text-gray-800">Card Number: {invoiceData.cardNumber}</p>
	            <p className="text-gray-800">Expiration Date: {invoiceData.expirationDate}</p>
	            <p className="text-gray-800">CVV: {invoiceData.cvv}</p>
	          </div>
          </div>

          {/* Product Table */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Products</h2>
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Product</th>
                  <th className="border px-4 py-2">Quantity</th>
                  <th className="border px-4 py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.products.map((product, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{product.name}</td>
                    <td className="border px-4 py-2">{product.quantity}</td>
                    <td className="border px-4 py-2">${product.price}</td>
                  </tr>
                ))}

                  <tr>
                    <td className="border px-4 py-2">Inv.txt</td>
                    <td className="border px-4 py-2">-</td>
                    <td className="border px-4 py-2">${invoiceData.shippingAmount.toFixed(0)}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Sub Total</td>
                    <td className="border px-4 py-2">-</td>
                    <td className="border px-4 py-2">${parseFloat(invoiceData.shippingAmount - invoiceData.total).toFixed(0).replace(/-/g, '')}</td>
                  </tr>
              </tbody>
            </table>
          </div>

          {/* Total */}
          <div className="mt-6">
            <p className="text-lg font-semibold">Total: <span className="text-orange-500">${invoiceData.total.toFixed(0)}</span></p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Invoice;
