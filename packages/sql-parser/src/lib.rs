use neon::prelude::*;

use sqlparser::dialect::GenericDialect;
use sqlparser::parser::*;
use std::string::String;

fn parser(mut cx: FunctionContext) -> JsResult<JsString> {
    let sql = cx.argument::<JsString>(0)?.value(&mut cx);

    let dialect = GenericDialect {};
    let ast = Parser::parse_sql(&dialect, &sql);

    let result;

    match ast {
        Ok(statement) => {
            result = serde_json::to_string_pretty(&statement).unwrap();
        }
        Err(_e) => {
            result = String::from("");
        }
    }
    Ok(cx.string(result))
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("parser", parser)?;
    Ok(())
}
