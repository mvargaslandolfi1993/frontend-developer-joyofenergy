# Introducing JOI Energy

JOI Energy is a new start-up in the energy industry. They provide their customers with smart meters that record their
energy usage, enabling them to save both money and the environment. The smart meters also record the energy that
a customer feeds back into the power grid via solar panels installed on their property.

You have been placed into the development team, whose current goal is to build a dashboard which will display the information gathered from the smart meters.

Unfortunately, two members of the team are on annual leave, and another one has called in sick! You are left with
another ThoughtWorker to progress with the current user stories. This is your chance to make an impact on the business, improve the code base and deliver value.

## Requirements

The project requires [Node v14.16.1](https://nodejs.org/en/download/) or higher.

### Styling

The application uses a "utility" CSS pattern from [BassCSS](https://basscss.com/).

### Run the application

```console
$ npm start
```

The application will launch at `http://localhost:8080`.

### Run the tests

```console
$ npm test
```

### TypeScript

TypeScript support is out-of-box.
You can create \*.ts files or import it into any of the existing files.

As an electricity consumer I want to be able to view cost ($), energy consumption (kWh) and carbon footprint (tonnes) of the last 30 days so that I can monitor my energy usage.
Acceptance Criteria:
Given I am viewing my energy dashboard, for the data displayed in the main graph (last 30 days of energy readings):
I can see the Cost 💰 in $ rounded to the nearest integer. Cost is $0.138 per 1 kWh.
I can see the Consumption ⚡ in kWh rounded to the nearest integer. Consumption is the sum of all readings for the last 30 days.
I can see the Footprint 👟 in tonnes to an accuracy of 4 decimal places. The Footprint is 0.0002532 tonnes per 1kWh.
I can see the Cost 💰 in $ rounded to the nearest integer. Cost is $0.138 per 1 kWh.
I can see the Consumption ⚡ in kWh rounded to the nearest integer. Consumption is the sum of all readings for the last 30 days.
I can see the Footprint 👟 in tonnes to an accuracy of 4 decimal places. The Footprint is 0.0002532 tonnes per 1kWh.
