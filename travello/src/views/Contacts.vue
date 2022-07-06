<template>
   <div>
      <!-- contact us page-->
      <div class="contacts">
         <!-- intro section -->
         <section class="intro_contacts">
            <div class="container">
               <div class="intro_contacts_wrap">
                  <h2 class="intro_title page_title">Contact us</h2>
               </div>
            </div>
         </section>
      </div>


      <!-- Get in touch section-->
      <section class="get_in_touch">
         <div class="container">
            <div class="get_in_touch_wrap">
               <div class="get_in_touch_hint hint">Contact</div>
               <h2 class="get_in_touch_title section_title">Get in touch</h2>
               <form action="" class="form">
                  <input type="text" placeholder="Name">
                  <input type="text" placeholder="Email">
                  <input type="number" placeholder="Phone No.">
                  <input type="text" placeholder="Subject">
                  <textarea name="textarea" placeholder="Message"></textarea>
                  <button class="btn form_button" type="button">Send message</button>
               </form>
            </div>
         </div>
      </section>


      <!-- adress section -->
      <div class="container">
         <div class="address_cards">
            <div class="card">
               <div class="card_icon">
                  <img src="../assets/images/contacts/cil_location-pin.svg" alt="icon">
               </div>
               <div class="card_title">Address</div>
               <div class="card_text">Victoria Street, Green Avenue 882 Sydney Australia</div>
            </div>
            <div class="card">
               <div class="card_icon">
                  <img src="../assets/images/contacts/ic_outline-email.svg" alt="icon">
               </div>
               <div class="card_title">Email</div>
               <div class="card_text">travello@gmail.com</div>
            </div>
            <div class="card">
               <div class="card_icon">
                  <img src="../assets/images/contacts/akar-icons_phone.svg" alt="icon">
               </div>
               <div class="card_title">Phone</div>
               <div class="card_text">+422-233-4344</div>
            </div>
         </div>
      </div>

      <!-- map -->
      <section class="map">

      </section>
   </div>
</template>

<script>
export default {
    name: "contacts",
}
</script>

<style lang="scss">

.intro_contacts {
    background-image: url(../assets/images/contacts/hero.jpg);
    background-color: #959c98;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;

    &_wrap {
        .intro_title {
            padding: 210px 0 130px;
        }
    }
}

.get_in_touch {
    // padding-top: 120px;
    padding: 120px 0;

    &_wrap {
        display: flex;
        flex-direction: column;
        align-items: center;

        .get_in_touch_hint {
            margin-bottom: 10px;
        }

        .get_in_touch_title {
            margin-bottom: 60px;
        }

        .form {
            max-width: 600px;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
    }
}

input,
textarea {
    padding: 12px 25px;
    border: 2px solid #2094E6;
    font-family: 'Work Sans';
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #666666;
    outline: none;
}

input {
    max-width: 290px;
}

textarea {
    flex-basis: 100%;
    height: 110px;
    resize: none;
}

.form_button {
    padding: 10px 0;
    width: 100%;
    text-transform: uppercase;
}

.address_cards {
    padding-bottom: 120px;
    display: flex;
    justify-content: center;
    gap: 20px;

    .card {
        flex-basis: 240px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        &_icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: #B1DAF6;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        &_title {
            font-size: 24px;
            line-height: 32px;
            color: #121212;
        }

        &_text {
            font-family: 'Work Sans';
            font-weight: 500;
            font-size: 16px;
            line-height: 120%;
            text-align: center;
            color: #333333;
            flex: 1 1 auto;
        }
    }
}

.map {
    background-image: url(../assets/images/contacts/maps.jpg);
    background-color: #959c98;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    width: 100%;
    height: 100%;
}

</style>