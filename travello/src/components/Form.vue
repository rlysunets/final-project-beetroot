<template>
    <div>
        <form method="post" class="form" @submit.prevent="checkAndSend">
            <input type="text" placeholder="Name" v-model="name">
            <input type="text" placeholder="Email" v-model="email">
            <input type="number" placeholder="Phone No." v-model="phone">
            <input type="text" placeholder="Subject" v-model="subject">
            <textarea name="textarea" placeholder="Message" v-model="message"></textarea>
            <button class="btn form_button" type="submit">Send message</button>
        </form>

        <modal-window v-if="showModal" @close="showModal = false">
            <template #body v-if="answer.success === null">{{ msg }}</template>
            <template #body v-else>{{ answer.msg }}</template>
        </modal-window>

    </div>
</template>

<script>
import ModalWindow from './ModalWindow.vue'

export default {
    name: "Form",
    components: {
        ModalWindow
    },
    data() {
        return {
            API_BOT_ID: "5248267262:AAGS92XigzCP4LToTDiE8rcdXUcKcFF7cSs",
            CHAT_ID: "-1001733809580",
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            showModal: false,
            msg: "",
            answer: {
                success: null,
                msg: ""
            }
        }
    },
    methods: {
        checkAndSend() {
            let valid = true
            if (this.message === "") {
                this.msg = "Enter message text"
                this.showModal = true
                valid = false
            }
            if (this.subject === "") {
                this.msg = "Enter subject text"
                this.showModal = true
                valid = false
            }
            if (this.phone === "") {
                this.msg = "Enter your phone number"
                this.showModal = true
                valid = false
            }
            if (this.email === "") {
                this.msg = "Enter your email"
                this.showModal = true
                valid = false
            } else {
                if (this.isValidEmail(this.email) === false) {
                    this.msg = "Enter your email"
                    this.showModal = true
                    valid = false
                }
            }
            if (this.name.length === 1) {
                this.msg = "Minimal name length is two chars"
                this.showModal = true
                valid = false
            }
            if (this.name === "") {
                this.msg = "Enter your name"
                this.showModal = true
                valid = false
            }

            if (valid) {
                const message_text = "<i>Feedback data</i>" +
                    "%0a<b>Name: </b>" + this.name +
                    "%0a<b>Email: </b>" + this.email +
                    "%0a<b>Phone: </b>" + this.phone +
                    "%0a<b>Subject: </b>" + this.subject +
                    "%0a<b>Message: </b>" + this.message

                fetch(`https://api.telegram.org/bot${this.API_BOT_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${message_text}&parse_mode=HTML`)
                    .then(resp => {
                        return resp.json()
                    })
                    .then(resp => {
                        if (resp.ok) {
                            this.answer.success = true
                            this.answer.msg = "Message successfully send"
                            this.showModal = true
                            this.name = this.email = this.phone = this.subject = this.message = ""
                        } else {
                            this.answer.success = false
                            this.answer.msg = resp.description
                            this.showModal = true
                        }
                    })
                    .catch(() => {
                        this.answer.success = false
                        this.answer.msg = "Some error eccures. Please try again later"
                        this.showModal = true
                    })
            }
        },
        isValidEmail(email) {
            return Boolean(email.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ))
        },
    }
}
</script>

<style lang="scss" scoped>

.form {
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    &_button {
        padding: 10px 0;
        width: 100%;
        text-transform: uppercase;
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
        width: 290px;
    }
    textarea {
        flex-basis: 100%;
        height: 110px;
        resize: none;
    }
}
</style>