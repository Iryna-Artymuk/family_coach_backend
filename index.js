const express = require( 'express' );
 const feedbackData=  require( './feedbackData' )


const app = express();

// app.use((req, res, next) => {
//  console.log('Наше проміжне ПЗ');
//  next();
// });
app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );

app.get( '/feedback', ( req, res ) =>
{
   
 res.json(feedbackData)
});

app.listen(3000, () => {
 console.log('Example app listening on port 3000!');
});