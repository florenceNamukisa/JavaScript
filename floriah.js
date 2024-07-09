// Produce data structure
const produce = [
    {
      name: "Beans",
      type: "Grain",
      date: "2024-07-01",
      time: "10:00",
      tonnage: 1000,
      cost: 500000,
      dealerName: "John Doe",
      branch: "Branch 1",
      contact: "0700000000",
      sellingPrice: 600000,
    },
    // More produce objects
  ];
  
  // Sales data structure
  const sales = [
    {
      produceName: "Beans",
      tonnage: 100,
      amountPaid: 60000,
      buyerName: "Jane Smith",
      salesAgent: "Agent A",
      date: "2024-07-01",
      time: "11:00",
      contact: "0710000000",
    },
    // More sales objects
  ];
  
  // Deferred payments data structure
  const deferredPayments = [
    {
      buyerName: "Jane Smith",
      nationalID: "NIN123456789",
      location: "Kampala",
      contact: "0710000000",
      amountDue: 60000,
      salesAgent: "Agent A",
      dueDate: "2024-08-01",
      produceName: "Beans",
      type: "Grain",
      tonnage: 100,
      dateOfDispatch: "2024-07-01",
    },
    // More deferred payment objects
  ];
  function recordProduce(produceItem) {
    produce.push(produceItem);
  }
  function recordSale(saleItem) {
    sales.push(saleItem);
    // Reduce the stock
    const produceItem = produce.find(p => p.name === saleItem.produceName);
    if (produceItem) {
      produceItem.tonnage -= saleItem.tonnage;
    }
  }
  function recordDeferredPayment(deferredPaymentItem) {
    deferredPayments.push(deferredPaymentItem);
  }
  function viewStockStatus() {
    return produce.map(p => ({
      name: p.name,
      type: p.type,
      tonnage: p.tonnage,
    }));
  }
    