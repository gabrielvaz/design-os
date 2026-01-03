# Data Model

## Entities

### User
A conta do usuário no aplicativo. Armazena as preferências pessoais, configurações de tema/idioma e métricas de engajamento, como a "ofensiva" (streak) de uso diário.

### Note
A entidade central de conteúdo gerada pelo usuário. Representa uma sessão de gravação (seja um sermão ou oração). Contém metadados como data de criação, duração do áudio, tipo (Sermão/Oração) e status de processamento da IA.

### Transcript
O conteúdo textual completo extraído do áudio da Nota. Armazenado separadamente para otimização de performance, contendo o texto bruto com marcações de tempo (timestamps).

### Summary
O conteúdo processado e sintetizado pela IA a partir da Transcrição. Contém o título sugerido, uma sinopse curta, pontos-chave (bullet points) e insights extraídos.

### BibleVerse
Representa uma referência bíblica específica (Livro, Capítulo, Versículo) e seu texto. Pode ser um "Versículo do Dia" exibido no feed ou um versículo citado e detectado dentro de uma Nota.

### Tag
Categorias temáticas (ex: "Fé", "Família", "Oração") usadas para organizar as Notas. Podem ser geradas automaticamente pela IA ou adicionadas manualmente pelo usuário.

### Speaker
Representa o pregador ou orador da gravação. Permite agrupar Notas por quem falou (ex: "Pastor João", "Convidado Especial").

## Relationships

- User possui muitas Notes
- Note possui uma Transcript
- Note possui um Summary
- Note possui muitas Tags
- Note possui referências a muitos BibleVerses (citados)
- Note pertence a um Speaker (opcional)
- User pode salvar/favoritar BibleVerses
- Tag pertence a muitas Notes (Relacionamento muitos-para-muitos)
