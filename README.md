## Take Home Assignment

### Setup

First, navigate to the /djangoblockhouse directory and run "source venv/bin/activate" to activate the environment. Then run "python manage.py runserver" in your terminal. The server will be hosted under [127.0.0.1:8000](http://127.0.0.1:8000 "127.0.0.1:8000")

To start up the NextJS frontend, you first need to have bun installed, which can be found here: [bun installation](https://bun.sh/docs/installation "bun installation")

Navigate to the /blockhousetakehome directory and install dependencies by running "bun install"

Start up the frontend by running "bun run dev" in your terminal. It will be hosted under [localhost:3000](http://localhost:3000 "localhost:3000")

### Libraries

I chose to use [recharts](https://recharts.org/en-US "recharts") for my custom charts due to their easy to read documentation and easy setup.
Other than that, I used standard React and NextJS libraries to make this application.

### Design

At first, I mostly coded everything under the app/page.tsx file. However, upon seeing how convoluted the code got, I decided to split everything up and modulize my project.

To begin, I separated the data fetching into a custom hook that would be called by the page. This data is used to populate the custom chart components I made.

I then made 4 custom chart components for the line, pie, bar, and candlestick charts. These charts can be easily reused.

My backend data is fetched through NextJS's built in routing endpoints to further protect my backend endpoints. Since my application is small scale, this doesn't affect performance much.

The DJango backend is all hardcoded data, and each chart's data can be accessed through the /api/{chart type} route. For example, [127.0.0.1:8000/api/candlestick-data/](http://127.0.0.1:8000/api/candlestick-data/ "127.0.0.1:8000/api/candlestick-data/") will return a JSON of the candlestick chart data.
