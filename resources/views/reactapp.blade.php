<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>React App</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700&display=swap" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'> 
    <style>
        body {
            font-family: 'Nunito', sans-serif;
            height:100%;
        }
        html{height:100%;}
    </style>
    <link href="{{mix('css/app.css')}}" type="text/css" rel="stylesheet" />
</head>
<body class="antialiased">
  <!-- React DOM Node -->
  <div id="app"></div>
  <!-- <script>
    wondow.env = {
        SITE_KEY : "{{ env('REACT_APP_SITE_KEY')}}",
        SECRET_KEY : "{{ env('REACT_APP_SECRET_KEY')}}"
    };
  </script> -->
  <script type="text/javascript" src="{{mix('js/app.js')}}"></script>
</body>
</html>