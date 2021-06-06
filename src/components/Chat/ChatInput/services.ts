export const getPreparedContent = (content: string) =>
  content.replaceAll(
    '<div><br></div>',
    `<div class="ChatMessages__break-line"><br></div>`
  );
