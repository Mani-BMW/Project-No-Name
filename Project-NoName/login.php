<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="Styles/login.css">    
    <title>No Name</title>
</head>
<body>
    <section class="container main-section" id="main-section">
      <section class="container inner-section" id="inner-section">

    <div class="top-heading" id="top-heading">
    <img class="img-heading" id="img-heading" src="Images/6606-male-user.png" width="200px" alt="login-icon">  
    <h3 class="h3-heading" id="h3-heading">ورود به حساب کاربری</h3>
    
    </div>

    <hr class="main-width" id="hr">


    <form class="main-form" id="main-form" action="login.php" method="POST" >
    <label for="email-input">: نام کاربری/ایمیل</label><br>
    <input class="form-control email-input" id="email-input" onClick="checkInput()"  name="email-input" type="text" placeholder="yourEmail@example.com"><br>
    <label for="password-input">: رمز عبور</label><br>
    <input class="form-control password-input" id="password-input" name="password-input" type="password" placeholder="******"><br>
    <div class="checkbox-div form-check">
    <label class="form-check-label checkbox-label" for="checkbox-input"> مرا به خاطر بسپار</label>
    <input class="form-check-input checkbox-input" type="checkbox" name="checkbox-input" id="checkbox-input"><br>
    </div>
    <p class="mt-3"><a href="">نام کاربری</a> / <a href="">رمز عبور</a>م را فراموش کرده ام</p>
    <p>حساب ندارید ؟<a class="signin-text" onclick="signupTransition()"> ثبت نام </a>کنید </p>

    <!-- <div class="form-check form-switch form-switch-div">
    <input type="checkbox" class="form-check-input switch-input" id="switch-input" onClick="formTransition()" checked>
    <label class="form-check-label signup-label" for="switch-input">ثبت نام</label>
    <label class="form-check-label login-label" for="switch-input">ورود</label>


    </div>
     -->
    <button class="btn btn-success login-btn mt-1" id="login-btn">ورود</button>

    </form>

    <form class="signup-form" id="signup-form" action="login.php" method="POST">

    <label for="username-input">: نام  کاربری </label><br><br>
    <input class="username-input form-control" id="username-input" name="username-input" placeholder="BehroozMKH1234" type="text"><br>
    <label for="email-input-2">: ایمیل</label><br><br>
    <input class="email-input-2 form-control" id="email-input-2" name="email-input-2" placeholder="behrooz@example.com" type="email" ><br>
    <label for="password-input-2">: رمز عبور</label><br><br>
    <input class="password-input-2 form-control" id="password-input-2" name="password-input-2" placeholder="********" type="password"><br>
    <div>
    <label for="password-confirm-input">: تایید رمز عبور</label><br><br>
    <input class="password-confirm-input form-control" id="password-confirm-input" name="password-confirm-input" placeholder="********" type="password">
    <div id="pass-confirm-feedback" class="feedback">
      رمز های بالا با یک دیگر مطابقت ندارند
    </div><br>
  </div>
    <p>حساب دارید ؟<a class="login-text" onclick="loginTransition()"> وارد </a>شوید</p>
    <button class="btn btn-success signup-btn">ثبت نام</button>
    
    </form>
    
    </section>
    </section><br>
    <footer id="footer" class="mobile-login-status">
      <a href=""><img class="telegram" id="telegram"  src="Images/telegram.png" width="30px" height="30px" alt="Telegram"></a>
      <a href=""><img class="instagram" id="instagram" src="Images/instagram.png" width="30px" height="30px" alt=""></a>
      <a href=""><img class="discord" id="discord" src="Images/discord.png" width="30px" height="30px" alt=""></a>
    </footer>














<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
<script src="Scripts/login.js"> </script>

</body>
</html>