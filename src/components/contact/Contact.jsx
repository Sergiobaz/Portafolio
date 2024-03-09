import styles from "./contact.module.css"
import Form from "./form/Form"

const Contact = ({dictionary}) => {
    return (
        <div id="contact" className={styles.container} >
            <Form dictionary={dictionary}/>
        </div>
    )
}

export default Contact