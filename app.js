const nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport({
	service:'gmail',
	auth:{
			type: 'OAuth2',
			user:'email',
			clientId:'clientid',
			clientSecret:'clientSecret',
			refreshToken:'refreshToken',
			accessToken:'accessToken'
	},
})

var mailOptions={
	from:'from',
	to:'to',
	subject:'nodemailer test',
	text:'hello world'
}

transporter.sendMail(mailOptions, function(err,res){
	if(err){
		console.log('Error');
	} else {
		console.log('Email sent');
	}
})
