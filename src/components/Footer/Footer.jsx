import style from './Footer.module.css'

const Footer = ({ tasks }) => {

  return (
    <footer className={style.footer}>
      <div className={style.tasks_statistic}>
        <p>Active tasks: {tasks.filter(task => task.status === "backlog").length}</p>
        <p>Finished tasks: {tasks.filter(task => task.status === "finished").length}</p>
      </div>
      <p className={style.contacts}>Kanban board by Goncharova Nadezhda, 2023</p>
    </footer>
  );
}

export default Footer;