import { EnvelopeIcon, HomeIcon, PhoneIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import styles from '@/app/css/Contact.module.css'; 

export const metadata = {
  title: "Contact Page",
}

export default function Contact() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.flexCenter}>
          <div>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>Below are the details to reach out to me!</p>

            <div className={styles.detailsWrapper}>
              <div>
                
                <div className={styles.contactDetail}>
                  <div className={styles.iconWrapper}>
                    <HomeIcon/>
                  </div>
                  <div className={styles.contactInfo}>
                    <h3 className={styles.contactInfoTitle}>Address</h3>
                    <p>Mehran Town Karachi</p>
                  </div>
                </div>

                <div className={styles.contactDetail}>
                  <div className={styles.iconWrapper}>
                    <PhoneIcon/>
                  </div>
                  <div className={styles.contactInfo}>
                    <h3 className={styles.contactInfoTitle}>Phone Number</h3>
                    <p>+923112242143</p>
                  </div>
                </div>

                <div className={styles.contactDetail}>
                  <div className={styles.iconWrapper}>
                    <EnvelopeIcon />
                  </div>
                  <div className={styles.contactInfo}>
                    <h3 className={styles.contactInfoTitle}>Email</h3>
                    <p>Ahed80174@gmail.com</p>
                  </div>
                </div>

                <div className={styles.contactDetail}>
                  <div className={styles.iconWrapper}>
                    <BriefcaseIcon />
                  </div>
                  <div className={styles.contactInfo}>
                    <h3 className={styles.contactInfoTitle}>
                      <Link href="https://www.linkedin.com/in/ahmed-raza-6918b72b8" className="text-slate-900 no-underline">
                        LinkedIn
                      </Link>
                    </h3>
                    <p>Ahmed Raza</p>
                  </div>
                </div>

              </div>

              <div className={styles.formWrapper}>
                <form>
                  <h2 className={styles.formTitle}>Send Message</h2>
                  <input
                    required
                    title="Full Name"
                    placeholder="Enter your full name"
                    className={styles.inputField}
                  />
                  <input
                    id="email"
                    required
                    title="Enter your email address"
                    placeholder="Enter your email address"
                    className={styles.inputField}
                  />
                  <input
                    id="message"
                    required
                    title="Enter your message here"
                    placeholder="Enter your message here"
                    className={styles.inputFieldMsg}
                  />
                  <input
                    type="submit"
                    id="submit"
                    value="Submit"
                    className={styles.submitButton}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
