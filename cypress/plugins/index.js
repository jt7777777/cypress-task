const fs = require('fs');
const path = require('path');

module.exports = (on, config) => {
  on('task', {
    writeRequestsToFile(data) {
      const filePath = path.resolve('C:\\Users\\jakub\\Downloads\\Cypress_task', 'requests.json');
      console.log(`Writing data to ${filePath}`);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`Data successfully written to ${filePath}`);
      return null;
    }
  });
};
