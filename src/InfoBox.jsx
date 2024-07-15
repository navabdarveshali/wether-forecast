import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
   let RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHkLFOqcP3JbYhFnEja9HT-z8VMjOSlQVb6w&s";
   let HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=612x612&w=0&k=20&c=MyYLgJ9NKAGMGh69lTW1r03_f91pozcmrZyPo9Oqcu8=";
   let COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREY_DbCwWXN5MucVqM9Sm6V5KvIG8OyVAfRQ&s";
   return(
        <div className="InfoBox">
        <div className="cardContainer">   
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 
          ? RAIN_URL
          :info.temp >15
          ? HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3>{info.city}</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temparature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}&deg;C</p>
          <p>min Temp = {info.tempMin}&deg;C</p>
          <p>max Temp = {info.tempMax}&deg;C</p>
          <p>The Weather can be described as {info.weather} feels like {info.feelsLike} &deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
};