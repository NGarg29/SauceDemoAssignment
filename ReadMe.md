# Playwright Shopping Cart Test

This project automates the testing of a shopping cart functionality, including the entire checkout process.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Running the Tests](#running-the-tests)
- [Test Execution Logs/Reports](#test-execution-logsreports)
- [Video Recordings](#video-recordings)
- [Troubleshooting](#troubleshooting)
- [Conclusion](#conclusion)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: Version 14.x or higher. You can download it from the [Node.js Official Website](https://nodejs.org/).
- **npm**: Version 6.x or higher (comes bundled with Node.js).
- **Browsers**: Playwright will install the required browsers automatically, so make sure you have internet access during installation.

## Setup Instructions

Follow these steps to set up and run the tests on your local machine:

1. **Clone the Repository**: 
   Open your terminal and run the following command to clone the repository:
   `git clone https://github.com/NGarg29/shopping-cart-e2e-playwright-tests.git`
   Navigate into the project directory:
   `cd shopping-cart-e2e-playwright-tests`

2. **Install Dependencies**: 
   To install all required packages, run:
   `npm install`

3. **Install Browsers**: 
   Playwright will automatically install the required browsers. To do this, run:
   `npx playwright install`

## Running the Tests

To run the tests, use the following commands:

- For headful (visible) mode, run:
`npx playwright test --headed`

- For headless (invisible) mode, run:
`npx playwright test`

## Test Execution Logs/Reports

After running the tests, execution logs and reports will be available in the `test-results` directory. You can view the previousely test execution generation report here:

- **HTML Report**: Open `test-output/report.html` in your browser to see a detailed test report.
- **JSON Logs**: Check `test-output/report.json` for execution logs.

## Video Recordings

Recordings of the test executions are available for review:

- **Headed Execution**: Open `tests/sauce-demo.spec.ts-snapshots-headful` directory to see video & screenshot for each test exceution
- **Headless Execution**: Open `tests/sauce-demo.spec.ts-snapshots-headless` directory to see video & screenshot for each test exceution

## Visual Comparison

After running the tests, the visual comparison of each test in form of screenshot will be available in the `tests/sauce-demo-spec.ts-snapshots` directory. Ensure that "headful" or "headless" is removed from the directory name to enable proper visual comparison between the test results.

## Conclusion

This README provides you with all the necessary instructions to set up and run the Playwright shopping cart tests. If you have any questions or need further assistance, feel free to reach out!
