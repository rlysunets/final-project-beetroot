<template>
    <div class="contacts">
        <intro title="Contact us" bg="hero_contacts.jpg" />

        <!-- Get in touch section-->
        <section-wrapper hint="Contact" title="Get in touch">
            <Form />
        </section-wrapper>

        <address-card />

        <!-- <section class="get_in_touch">
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
        </section> -->

        <!-- adress section -->
        <!-- <div class="container">
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
        </div> -->

        <!-- map -->
        <section class="map"></section>
    </div>
</template>

<script>
import Intro from "@/components/Intro.vue"
import SectionWrapper from "@/components/SectionWrapper.vue"
import Form from "@/components/Form.vue"
import AddressCard from "@/components/AddressCard.vue"
export default {
    name: "contacts",
    components: {
    Intro,
    SectionWrapper,
    Form,
    AddressCard
}
}
</script>

<style lang="scss" scoped>
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
    // background-image: url(../assets/images/contacts/maps.jpg);
    background-color: #959c98;
    // background-repeat: no-repeat;
    // background-position: 50% 50%;
    // background-size: cover;
    // width: 100%;
    // height: 100%;
}

</style>