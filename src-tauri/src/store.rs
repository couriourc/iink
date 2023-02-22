pub struct Store {
    label: String,
}

impl Store {
    fn new(label: String) -> Store {}
    fn execute<F>(&self, f: F)
    where
        F: FnOnce() + 'static + Send,
    {
    }
}
