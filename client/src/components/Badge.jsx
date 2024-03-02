import React from 'react';

const Badge = ({ status }) => {
  let bgColor, textColor, statusText;

  // Define colors and text based on status
  switch (status) {
    // Customers
    case 'Active':
      bgColor = 'bg-green-200/50 border-green3000';
      textColor = 'text-green-800';
      statusText = 'Active';
      break;
    case 'Inactive':
      bgColor = 'bg-gray-200/50 border-gray-300';
      textColor = 'text-gray-800';
      statusText = 'Inactive';
      break;
    case 'Pending Verification':
      bgColor = 'bg-orange-200/50 border-orange-300';
      textColor = 'text-  -800';
      statusText = 'Pending Verification';
      break;
    case 'Verified':
      bgColor = 'bg-blue-200/50 border-blue-300';
      textColor = 'text-blue-800';
      statusText = 'Verified';
      break;

    // Orders
    case 'Pending':
      bgColor = 'bg-orange-200/50 border-orange-300';
      textColor = 'text-orange-800';
      statusText = 'Pending';
      break;
    case 'Processing':
      bgColor = 'bg-blue-200/50 border-blue-300';
      textColor = 'text-blue-800';
      statusText = 'Processing';
      break;
    case 'Shipped':
      bgColor = 'bg-indigo-200/50 border-indigo-300';
      textColor = 'text-indigo-800';
      statusText = 'Shipped';
      break;
    case 'Delivered':
      bgColor = 'bg-green-200/50 border-green-300';
      textColor = 'text-green-800';
      statusText = 'Delivered';
      break;
    case 'Cancelled':
      bgColor = 'bg-red-200/50 border-red-300';
      textColor = 'text-red-800';
      statusText = 'Cancelled';
      break;
    case 'Refunded':
      bgColor = 'bg-purple-200/50 border-purple-300';
      textColor = 'text-purple-800';
      statusText = 'Refunded';
      break;
    case 'Completed':
      bgColor = 'bg-gray-200/50 border-gray-300';
      textColor = 'text-gray-800';
      statusText = 'Completed';
      break;

    // Products
    case 'Out of Stock':
      bgColor = 'bg-red-200/50 border-red-300';
      textColor = 'text-red-800';
      statusText = 'Out of Stock';
      break;
    case 'Discontinued':
      bgColor = 'bg-purple-200/50 border-purple-300';
      textColor = 'text-purple-800';
      statusText = 'Discontinued';
      break;

    // Payments
    case 'Authorized':
      bgColor = 'bg-blue-200/50 border-blue-300';
      textColor = 'text-blue-800';
      statusText = 'Authorized';
      break;
    case 'Captured':
      bgColor = 'bg-green-200/50 border-green-300';
      textColor = 'text-green-800';
      statusText = 'Captured';
      break;
    case 'Failed':
      bgColor = 'bg-red-200/50 border-red-300';
      textColor = 'text-red-800';
      statusText = 'Failed';
      break;

    default:
      bgColor = 'bg-gray-200/50 border-gray-300';
      textColor = 'text-gray-800';
      statusText = 'Unknown';
  }

  return (
    <span className={`inline-block px-2 py-1 rounded border ${bgColor} ${textColor} text-xs font-medium`}>
      {statusText}
    </span>
  );
};

export default Badge;