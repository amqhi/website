<script lang="ts">
import { Link } from "./components/ui/navigation-menu/index.ts";

let {
	imgSrc,
	href,
	title,
	description,
	hover
} = $props();
</script>

<style>
	.title {
			font-weight: bold;
			display: flex;
			flex-direction: row;
			gap: 10px;
			align-items: center;
	}
</style>

<li>
	<Link {href}>
		<div class="flex flex-col gap-1 text-sm hover:{hover}">

			<div class="title">
				<img src={imgSrc} width="36px" alt={title}/>
				{title}
			</div>
			<div class="line-clamp-2 text-muted-foreground">
				{description}
			</div>
		</div>
	</Link>
</li>