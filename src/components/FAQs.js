import React from 'react'
import styles from '../styles/faqs.module.css';

function FAQs() {
  const faqs = [
    {
      ques: "What is Pigeon?",
      ans: "Pigeon allows you to get anonymous feedback from your friends, co-workers and fans. Discover your strengths and areas of improvement by receiving feedbacks from everyone."
    },
    {
      ques: "Why I should use Pigeon?",
      ans: "Pigeon.rocks is an anonymous secret message platform which has many unique features. You can check out by using just once."
    },
    {
      ques: "Is this site safe?",
      ans: "Yes this site is safe. If you don’t feel safe you can always delete your account and stop using the website. Once you delete your account, it’s permanently deleted from our servers."
    },
    {
      ques: "I want to know who messaged me?",
      ans: "If you have used a service called anonymous messages, you must understand that the identity of users sending you messages are not stored. Hence, there are no ways to understand who sent you the messages."
    },
    {
      ques: "I forgot my Login password, how can I recover it?",
      ans: "If you forgot the Login password then please create a new account. Anyone who has only a User ID but not password is necessarily not the same person who has created the account. Therefore, we cannot provide password to anyone."
    },
    {
      ques: 'I forgot to take the screenshot of the User ID and Password, how can I Login?',
      ans: 'Try visiting the website with the same browser you used to create an account. If your account is still logged in, then take the screenshot for future use. You can use that User Id and Pin to Login from any other device or browser in future. But in case your account is not logged in, then there is no way to restore User Id and Password. To continue using, you need to create a new account and this time remember to take the screenshot.',
    },
    {
      ques: 'Someone is abusing or insulting me, how can I know who they are?',
      ans: 'If someone is insulting you and you are bothered, please log out of your account and stop using our service. If someone is abusing you, there is no way from our side to understand who messaged you. I completely understand your concern but that\'s how our website works.',
    },
    {
      ques: 'People sending you anonymous messages but those messages are not appearing on my timeline, what can I do?',
      ans: 'Try clicking on the refresh button or refreshing the page.',
    },
    {
      ques: 'How to create my account?',
      ans: 'Go to the website(https://pigeon.rocks), Enter your name and then click the “Create your Link” button. Your account is now created. Copy your link by clicking the “Copy” button and then share that link on all your Social Media Accounts.',
    },
    {
      ques: 'How to restore deleted messages?',
      ans: 'Once you delete any message, it’s permanently deleted from our servers. Therefore, there is no way you can restore deleted messages.'
    }
  ]
  const [open, setOpen] = React.useState(-1);
  return (
    <div className={styles.card}>
      <h2>FAQs</h2>
      {
        faqs.map((faq, ind) => {
          if (ind === open) {
            return (<>
              <div className={`${styles.ques} ${styles.active}`} onClick={() => setOpen(-1)}>
                <p>{faq.ques}</p>
                <div>
                  <i class="fa fa-minus-circle"></i>
                </div>
              </div>
              <div className={styles.ans}>
                <p>{faq.ans}</p>
              </div>
            </>)
          }
          else {
            return (<>
              <div className={styles.ques} onClick={() => setOpen(ind)}>
                <p>{faq.ques}</p>
                <div>
                  <i class="fa fa-plus-circle"></i>
                </div>
              </div>
            </>)
          }
        })
      }
    </div>
  )
}

export default FAQs
