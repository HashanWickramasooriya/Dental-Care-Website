# All Care Dental Website

A multi-page website for All Care Dental, a dental clinic in Maharagama, Sri Lanka. Built with static HTML/CSS/JavaScript on the front end and PHP with MySQL for the appointment and contact forms.

## Structure

- `*.html` - Home, About, Services, Gallery, Blog and Contact pages.
- `Customer Information Form.html` / `doctor-details.html` - the two-step appointment booking flow. Contact details are collected first and carried to the second step via `localStorage`, where the visitor picks a doctor, date and time.
- `save_appointment.php`, `contact.php`, `connection.php` - handle form submissions and talk to the MySQL database using prepared statements.
- `confirmation.php`, `message_sent.php` - honest confirmation screens shown after a booking or message is submitted (they confirm the *request* was received, not that a human has confirmed the appointment).
- `css/` - four stylesheets, one per page family (`style12.css` for the homepage, `style1.css` for the informational pages, `servise_item.css` for individual service pages, `blogpage.css` for blog articles).
- `js/nav.js` - shared mobile navigation (hamburger menu) used on every page except the homepage, which has its own toggle in `js/script.js`.
- `all_care_dental.sql` - database schema and seed data for the `appointments` and `message` tables.

## Running locally

This project expects a classic PHP + MySQL stack (e.g. XAMPP, WAMP or MAMP):

1. Copy the project folder into your server's web root (e.g. `htdocs`).
2. Create a database named `all_care_dental` and import `all_care_dental.sql`.
3. Start Apache and MySQL, then open `index.html` through your local server (e.g. `http://localhost/Dental-Care-Website/index.html`).

`connection.php` connects as `root` with no password, which matches the default XAMPP/MySQL setup. Update the credentials there if your local environment differs, and never commit real production database credentials to this file.

## Known limitations

- Appointment times are generated from a fixed weekly schedule per doctor rather than a live booking calendar, so double-booking isn't prevented server-side.
- There is no authenticated admin area to view submitted appointments or messages; they are only visible directly in the database.
