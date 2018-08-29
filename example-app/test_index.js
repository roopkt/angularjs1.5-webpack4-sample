require('angular');
require('angular-mocks/ngMock');
const testContext = require.context('../example-app/app', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);
