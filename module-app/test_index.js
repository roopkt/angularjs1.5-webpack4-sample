require('angular');
require('angular-mocks/ngMock');
const testContext = require.context('../module-app/app', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);
