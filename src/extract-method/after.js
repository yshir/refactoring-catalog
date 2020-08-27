const printOwing = invoice => {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails(outstanding);

  const printDetails = outstanding => {
    console.log(`name: ${invoice.name}`);
    console.log(`amount: ${outstanding}`);
  };
};
